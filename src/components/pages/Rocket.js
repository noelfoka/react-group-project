import { useSelector, useDispatch } from 'react-redux';
import { reserve, cancel } from '../../redux/rocket/Rocket';
import SingleRocket from '../../redux/rocket/SingleRocket';

const Rocket = () => {
  const dispatch = useDispatch();

  // Access the 'list' property within 'state.rocket'
  const list = useSelector((state) => state.rocket.list);

  const reserveRocket = (id) => (
    (list[id - 1].reserved && list[id - 1].reserved === 'true')
      ? dispatch(cancel(list, id))
      : dispatch(reserve(list, id))
  );

  return (
    <>
      <div className="falcon">
        <ul className="falcon-list">
          {list.map((each) => (
            <SingleRocket
              key={each.id}
              name={each.rocketName}
              description={each.description}
              image={each.flickrImages}
              id={each.id}
              reserve={reserveRocket}
              rocket={each}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rocket;
