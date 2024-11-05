import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Banner from '../componets/Banner/Banner'
import { useEffect, useState } from 'react';




const Home = () => {
    const {category} = useParams()
    const data = useLoaderData()

    const [categories, setCategories] = useState('All')
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        document.title =" Home | Gadget Heaven"
        setProducts(data)
    },[])

    const handleCategoryClick = (event,category) => {
        event.preventDefault()
        setCategories(category)
        if(category === 'All'){
            setProducts(data) 
        }else{
            const filterData = data.filter(
                (gadget) => gadget.category === category
            )
            setProducts(
                filterData.length > 0 ? filterData : [{ product_id: 0, product_title: "No data found" }] 
            )
        }
    }

    const handleViewDetails = (event, productId) => {
        event.preventDefault()
        navigate(`/details/${productId}`)
    }

    

    return (
        <div>
                <Banner></Banner>
                    <Outlet></Outlet>
                    <h2 className="text-center text-2xl font-bold text-[#0B0B0B] m-6">
                    Explore Cutting-Edge Gadgets
                </h2>
            <div className='flex'>
           
                <div className='w-1/3'>

                <h2 className="text-center text-2xl font-bold  mb-4"> AllProducts </h2>
                       
                <ul className="flex flex-col gap-5">
                    {
                        ["All","Laptops", "Accessories", "Phones", "Smart Watch"].map((category) =>
                        ( <li key={category} className="text-[18px]">
                            <button
                              className={`btn w-[192px] ${
                                categories === category ? "btn-active" : "hover:btn-warning"
                              }`}
                              style={{ color: "gray" }}
                              onClick={(event) => handleCategoryClick(event, category)}>
                              {category}
                            </button>
                          </li>)
                        )
                    }

                </ul>
            

                </div>

                <div className='w-3/4'>
               

                <div className='grid grid-cols-3 gap-5'>
               
                    {products.map((gadget) =>(
                        <div key={gadget.product_id} className="card card-bordered p-4">
                        {gadget.product_id !== 0 ? (
                          <>
                            <img
                              src={gadget.product_image}
                              alt={gadget.product_title}
                              className="w-full h-48 object-cover mb-4 rounded-md"
                            />
                            <h3 className="text-[20px] font-bold mb-2">
                              {gadget.product_title}
                            </h3>
                            <p className="text-[16px] mb-2">${gadget.price}</p>
                            <button
                              className="btn"
                              onClick={(event) =>
                                handleViewDetails(event, gadget.product_id)
                              }>
                             View Details
                            </button>
                          </>
                        ) : (
                          <h3 className="text-[20px] font-bold mb-2">
                            {gadget.product_title}
                          </h3>
                        )}
                      </div>

                    ))}

                </div>


               </div>
            </div>
            
        </div>
    );
};

export default Home;