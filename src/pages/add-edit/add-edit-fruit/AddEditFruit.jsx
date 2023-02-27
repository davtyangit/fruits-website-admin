import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Input } from '../../../components/Input/Input'
import { UpdateUser, CreateProduct, CreateCategory } from '../../../redux/reducers/productsSlice'
import axios from 'axios'

export const AddEditFruit = ({ isEditForm }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const { id } = useParams()
    const userId = useRef(+id)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [country, setCountry] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [myimage, setMyImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false)

    const uploadImage = (e) => {
        setMyImage(URL.createObjectURL(e.target.files[0]));
    }

    const onUploadImage = (file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', "ihkjlzgy")
        setImageLoading(true)
        axios
            .post("http://api.cloudinary.com/v1_1/dth7rq73s/image/upload", formData)
            .then((res) => {
                setImageUrl(res.data.url)
                setImageLoading(false)
                toast.success("Image succesfully uploaded!")
            }).catch(error => {
                setImageLoading(false)
                toast.error("Something went wrong!")
            })
    }

    useEffect(() => {
        if (isEditForm && userId) {
            const userData = products.filter((user) => user.id === userId.current)
            if (userData) {
                setName(userData[0].name)
                setPrice(userData[0].price)
                setCountry(userData[0].country)
            }
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleAdd = () => {
        if (name && price) {
            if (isEditForm) {
                const data = { name, price, country, imageUrl }
                const id = userId.current
                const updateData = { id, data }
                toast.success("Information edited!")
                dispatch(UpdateUser(updateData))
                navigate('/products')
            } else {
                const id = Math.ceil(Math.random() * 100)
                const data = { name, price, country, imageUrl, id }
                if (data) {
                    dispatch(CreateProduct(data))
                    dispatch(CreateCategory({ country }))
                    navigate('/products')
                    toast.success("Product succesfully created!")
                } else {
                    toast.error("Something went wrong!")
                }
            }
        } else {
            toast.error("All fields are required")
        }
    }

    const handleName = (e) => setName(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    const handleCountry = (e) => setCountry(e.target.value)

    return (
        <div className='form-div'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form__header'>{isEditForm ? "Edit" : "Create"}</h1>
                <Input className={"input_line"} placeholder={"Name..."} type={"text"} value={name} handleChange={handleName} />
                <Input className={"input_line"} placeholder={"Price..."} type={"text"} value={price} handleChange={handlePrice} />
                <Input className={"input_line"} placeholder={"Country..."} type={"text"} value={country} handleChange={handleCountry} />

                <input
                    className='img_input maso'
                    type="file"
                    onChange={e => {
                        onUploadImage(e.target.files[0])
                        uploadImage(e)
                    }} />

                {myimage && (<img src={myimage} style={{ height: 100, maxWidth: 160 }} />)}
                {imageLoading && <h1>LOADING...</h1>}

                {isEditForm && !myimage && <p className='again'>Select an image again</p>}

                <button className='create' type='submit' onClick={() => handleAdd()}>
                    {isEditForm ? "Save" : "Create"}
                </button>
            </form>
        </div>
    )
}
