import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/dishes';

function CounterButton({ product }) {
  const { cartList } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const cartCount = cartList?.find((item) => item?.dish_id === product?.dish_id)?.count;

  return (
    <>

      <div className='counterButton'>
        <button onClick={() => dispatch(decrement(product))} className='minus fs-4'><b>-</b></button>
        <p className='buttonCount'>{cartCount}</p>
        <button onClick={() => dispatch(increment(product))} className='plus fs-4'><b>+</b></button>
      </div>

    </>
  )
}

export default CounterButton