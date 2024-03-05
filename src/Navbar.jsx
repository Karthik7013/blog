import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  let login = useSelector(e => e?.isLoggedIn)
  let name = useSelector(e => e?.user?.username);
  function navLogin() {
    if (!login) { navigate('/login') }

  }
  return (
    <>
      <div className="navbar bg-[#f4f4f4] fixed top-0 z-50 shadow md:px-20">
        <div className="flex-1">
          <a className="hidden btn btn-ghost text-xl md:flex">Blog</a>
          <div className="btn w-10 h-10 p-1 md:hidden">
            <label className="btn btn-circle swap swap-rotate">
              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
          </div>
          <div className="dropdown dropdown-end" onClick={navLogin}>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar overflow-hidden flex justify-center items-center">
              {login ? <div className="bg-pink-400 w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex items-center justify-center"><span className="font-bold text-lg uppercase">{name && name[0]}</span></div>
              </div> : <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>}

            </div>
            {login && <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-neutral text-white">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
              <li><a>Delete Account</a></li>
            </ul>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar