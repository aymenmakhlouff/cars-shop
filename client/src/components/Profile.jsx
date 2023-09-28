import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import CreateCar from './CreateCar.jsx';

const Profile = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  // const [color, setColor] = useState("")
  // const [category, setCategory] = useState("")
  // const [brand, setBrand] = useState("")

  const [updatename, setUpdateName] = useState("")
  const [updatedescription, setUpdateDescription] = useState("")
  const [updateprice, setUpdatePrice] = useState("")
  const [updateimage, setUpdateImage] = useState("")
  // console.log(updatename,"name");
  // console.log(updatedescription,"description");
  // console.log(updateprice,"price");
  // console.log(updateimage,"image");
  // const [updatecolor, setUpdateColor] = useState("")
  // const [updatecategory, setUpdateCategory] = useState("")
  // const [updatebrand, setUpdateBrand] = useState("")
  const [carid,setCarid]=useState(0)

  return (

    <div>
      <li className="nav-item">
              <a onClick={() => navigate("/home")}className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <div class="btn-group">
          </div>


          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* ///////////////////////////ARCHIVE/////////////////// */}
        {/* <div>
          <button class="button">
            <svg class="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none"><g stroke-width="2" stroke-linecap="round" stroke="#056dfa" fill-rule="evenodd" clip-rule="evenodd"><path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path><path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path></g></svg>
            <span class="lable">Archive</span>
          </button>
        </div> */}
      <div className="buttons">
        {/* ////////////////////////ADD///////////////////////// */}
        <div>
          <button title="Add" class="cssbuttons-io-button" data-bs-toggle="modal" data-bs-target="#createOne" >
            <svg height="25" width="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path></svg>
            <span>Add</span>
          </button>


          <div class="modal fade" id="createOne" tabindex="-1" aria-labelledby="createOneLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="createOneLabel">Create</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...zlkjklqsj
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Name</span>
                    <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                  </div>
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Description</span>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                  </div>
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Price</span>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                  </div>
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Image</span>
                    <input onChange={(e) => setImage(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                  </div>
                 
                





                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button onClick={() => props.createCar(name, description, price, image)} data-bs-dismiss="modal" type="button" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>






        </div>
      </div>
      <div className='container_card'>

      {props.dataProfile.map((car) =>
        <div class="card">
          {/* {setCarid(car.id)} */}
          <div class="card__wrapper">
            <div class="card__back"><img fill="none" viewBox="0 0 14 24" height="24" width="14" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#000" d="M12 2L2 12L12 22"></path></div>
            <button class="edit-button" data-bs-toggle="modal" data-bs-target="#Update" >
              <svg class="edit-svgIcon" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>


            <div class="modal fade" id="Update" tabindex="-1" aria-labelledby="UpdateLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="UpdateLabel">Update</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping">Name</span>
                      <input onChange={(e) => setUpdateName(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping">Description</span>
                      <input onChange={(e) => setUpdateDescription(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping">Price</span>
                      <input onChange={(e) => setUpdatePrice(e.target.value)} type="number" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                    </div>
                                      {/* <input  onChange={(e) => setUpdatePrice(e.target.value)} type="number"/> */}

                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping">Image</span>
                      <input onChange={(e) => setUpdateImage(e.target.value)} type="text" class="form-control" placeholder="Write here..." aria-label="Write here..." aria-describedby="addon-wrapping" />
                    </div>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={() => props.updateCar(car.id, updatename, updatedescription, updateprice, updateimage)} type="button" class="btn btn-primary" data-bs-dismiss="modal" >Submit Updates</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="circle-container"><img src={car.image} id="circle-image" viewBox="0 0 24 24" /><linearGradient y2="14.26279" y1="7.881249" x2="18.333574" x1="4.648317" gradientUnits="userSpaceOnUse" id="a"><stop stop-opacity=".2" stop-color="#fff" offset="0"></stop><stop stop-opacity="0" stop-color="#fff" offset="1"></stop></linearGradient><path fill="#303c42" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 -8.470512 10.550131)" fill="#9f614b" d="m4.757184 11.757184h7.485388v7.485388h-7.485388z"></path><path fill="#676f4b" d="m6.8535156 22.4394531c-.7246094.7226562-1.9824219.7226562-2.7070312 0l-2.5859375-2.5859375c-.3613281-.3613281-.5605469-.8417968-.5605469-1.3535156s.1992188-.9921875.5605469-1.3535156l.9394531-.9394532 5.2929688 5.2929688z"></path><path fill="#676f4b" d="m17.1464844 8.1464844c-.1337891.1337891-.1806641.3320312-.1210938.5117188.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4103394 1.4104614-5.2929687-5.2929688 1.4103394-1.4104614c.8837891-.8833008 2.0527344-1.3549805 3.2548828-1.3549805.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6464843-3.6464844 1.2929688 1.2929688z"></path><path opacity=".1" d="m8.4998169 10.2068481-5.2928467 5.2930909.5092774.5092773 5.2767658-5.3091717z"></path><path opacity=".1" d="m2.0605469 17.6650391.9394531-.9580079-.5-.5-.9394531.9394531c-.3613281.3613282-.5605469.8417969-.5605469 1.3535157s.1992188.9921875.5605469 1.3535156l.4143677.4143677c-.3024903-.3477783-.4749146-.7832642-.4749146-1.2493286 0-.5117188.1992188-.9921875.5605469-1.3535156z"></path><path opacity=".1" d="m14.3720703 7.2529297c.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6578121-3.6537108-.5113278-.5113283-3.6464844 3.6464844c-.1337891.1337891-.3310547.1821289-.5117188.1206055-.4833984-.1611328-.9794922-.2397461-1.4697266-.2397461-1.2021484 0-2.3710938.4716797-3.2548828 1.3549805l-1.4103393 1.4104614.5092773.5092773 1.401062-1.4011841c.8837892-.8833007 2.0527345-1.3549804 3.2548829-1.3549804z"></path><g fill="#fff"><path transform="matrix(.7025585 -.711626 .711626 .7025585 -9.489386 13.071864)" opacity=".2" d="m7.148615 17.527449h7.487697v.720234h-7.487697z"></path><path opacity=".2" d="m6.3550715 21.9159241c-.7246094.7226562-1.9824219.7226562-2.7070312 0l.5.5185547c.7246094.7226562 1.9824219.7226562 2.7070312 0l.9378973-.9344788-.5113282-.5113277z"></path><path opacity=".2" d="m17.1480408 8.14151 3.6464844-3.6464849-.5125713-.5060406-3.633913 3.6339703c-.1337891.1337891-.1806641.3320312-.1210938.5117192.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4258442 1.420042.5155048.5089741 1.4103394-1.4104614c1.2451172-1.2441406 1.6728516-3.0541992 1.1152344-4.7241211-.0595704-.1796874-.0126954-.3779296.1210937-.5117187z"></path></g><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 4.654437 15.986806)" fill="#fed4a3" d="m20.533957 1.814287h2.182087v1.121427h-2.182087z"></path><path fill="url(#a)" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path></div>
          <div class="card__title">{car.name}</div>
          <div class="card__subtitle">{car.description}</div>
          <div class="card__wrapper">
            <div class="card__price">{car.price} $</div>
            <div class="card__counter">
              <button data-bs-toggle="modal" data-bs-target="#deleteoneCar" class="delete-button">
                <svg class="delete-svgIcon" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>

                

                <div class="modal fade" id="deleteoneCar" tabindex="-1" aria-labelledby="deleteoneCarLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="deleteoneCarLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        Are you sure to delete this one?
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.deliteCar(car.id)} >Yes</button>
                      </div>
                    </div>
                  </div>
                </div>


              </button>
            </div>
          </div>
        </div>
      )}

    </div>
    </div>







  )
}

export default Profile;
