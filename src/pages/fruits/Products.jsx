import { NavLink } from 'react-router-dom'
import { Loading } from '../../components/loader/Loading'
import { useProducts } from './useProducts'

export const Products = () => {
    const { products, loading, DeleteProduct, toAdd } = useProducts()

    return (
        <div className='container'>
            <div className='header_cont'>
                {!loading && <button onClick={toAdd} className='add_link'>Create</button>}
            </div>
            <div className='fruits'>
                {
                    loading ? <Loading /> : products && products?.map(({ id, name, price, country, imageUrl }) => {
                        return (
                            <div className='fruits_card' key={id} >
                                <span className='fruit__name'>{name}</span>
                                <div className='fruit__info'>
                                    <span className='price'>{price}</span>
                                    <span>{country}</span>
                                </div>
                                <img src={imageUrl} width={"100px"} height={"100px"} />
                                <div className='fruits__btss'>
                                    <button onClick={() => DeleteProduct(id)}>Delete</button>
                                    <NavLink className="edit_btn" to={`/edit-fruit/${id}`}>Edit</NavLink>
                                </div>
                            </div>
                        )
                    })
                }
                {!loading && products?.length === 0 ? "No data yet" : null}
            </div>
        </div>
    )
}
