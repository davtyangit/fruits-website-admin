import { NavLink } from 'react-router-dom'
import { Loading } from '../../components/loader/Loading'
import { useVagetables } from './useVagetables'

export const Vagetables = () => {
    const { vagetables, loading, DeleteVagetables, toAdd } = useVagetables()

    return (
        <div>
            <div className='container'>
                <div className='header_cont'>
                    {
                        !loading && <button onClick={toAdd} className='add_link'>Create</button>
                    }
                </div>
                <div className='fruits'>
                    {
                        loading ? <Loading /> : vagetables && vagetables?.map(({ id, name, price, country, imageUrl }) => {
                            return (
                                <div className='fruits_card' key={id} >
                                    <span className='fruit__name'>{name}</span>
                                    <div className='fruit__info'>
                                        <span className='price'>{price}</span>
                                        <span>{country}</span>
                                    </div>
                                    <img src={imageUrl} width={"100px"} height={"100px"} />
                                    <div className='fruits__btss'>
                                        <button onClick={() => DeleteVagetables(id)}>Delete</button>
                                        <NavLink className="edit_btn" to={`/edit-vagetable/${id}`}>Edit</NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {!loading && vagetables?.length === 0 ? "No data yet" : null}
                </div>
            </div>
        </div>
    )
}
