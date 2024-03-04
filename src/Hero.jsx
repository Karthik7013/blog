import {useSelector} from "react-redux"
const Carousel = () => {
  let login = useSelector(e=>e.isLoggedIn);
  let user = useSelector(e=>e.user);

  return (<>
<div className="hero min-h-dvh" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1709251200&semt=ais)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold capitalize">Hello {login ? user?.username:"There"}</h1>
      <p className="mb-5">We believe in the power of words and ideas to ignite curiosity, spark creativity, and empower change. Whether your a seasoned enthusiast or a curious beginner, our blog is your one-stop destination for a diverse range of engaging and informative content.</p>
      <button className="btn text-xl font-light bg-[#dedddd]"  onClick={() => document.getElementById('create_post').showModal()}>Create Post</button>
    </div>
  </div>
</div>
  
  </>
  
  )
}

export default Carousel