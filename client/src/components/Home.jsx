import React, { useState } from 'react';
import { useNavigate } from 'react-router';
const Home = (props) => {
  const navigate = useNavigate()
const [term,setTerm]=useState("")
  return (<div>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <div className="card-info">
          <div className="card-avatar">
            <svg onClick={() => navigate("profile")} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
            </svg>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a onClick={() => navigate("profile")} className="nav-link active" aria-current="page" href="#">Profile</a>
            </li>
            
            
            
          </ul>
          <div className="d-flex" role="search">
            <input onChange={(e)=>setTerm(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" onClick={()=>props.searchProfile(term)}>Search</button>
          </div>
        </div>
      </div>
    </nav>
    <div className='container_card'>
    {props.dataHome.map((e) =>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__back"><img fill="none" viewBox="0 0 14 24" height="24" width="14" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#000" d="M12 2L2 12L12 22"></path></div>
          <div className="card__menu"><img width="29" viewBox="0 0 29 14" height="14" fill="none" /><path fill="#000" d="m16.5714 9.16667h10.3572c.5493 0 1.0762.22827 1.4647.6346s.6067.95743.6067 1.53203c0 .5747-.2182 1.1258-.6067 1.5321s-.9154.6346-1.4647.6346h-10.3572c-.5493 0-1.0762-.2283-1.4647-.6346s-.6067-.9574-.6067-1.5321c0-.5746.2182-1.1257.6067-1.53203s.9154-.6346 1.4647-.6346zm-14.49997-8.66667h24.85717c.5493 0 1.0762.228273 1.4647.6346.3885.40633.6067.95743.6067 1.53207 0 .57463-.2182 1.12573-.6067 1.53206s-.9154.6346-1.4647.6346h-24.85717c-.54938 0-1.076254-.22827-1.464722-.6346s-.606708-.95743-.606708-1.53206c0-.57464.21824-1.12574.606708-1.53207.388468-.406327.915342-.6346 1.464722-.6346z"></path></div>
        </div>
        <div className="circle-container"><img src={e.image} viewBox="0 0 24 24" id="circle-image" /><linearGradient y2="14.26279" y1="7.881249" x2="18.333574" x1="4.648317" gradientUnits="userSpaceOnUse" id="a"><stop stop-opacity=".2" stop-color="#fff" offset="0"></stop><stop stop-opacity="0" stop-color="#fff" offset="1"></stop></linearGradient><path fill="#303c42" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 -8.470512 10.550131)" fill="#9f614b" d="m4.757184 11.757184h7.485388v7.485388h-7.485388z"></path><path fill="#676f4b" d="m6.8535156 22.4394531c-.7246094.7226562-1.9824219.7226562-2.7070312 0l-2.5859375-2.5859375c-.3613281-.3613281-.5605469-.8417968-.5605469-1.3535156s.1992188-.9921875.5605469-1.3535156l.9394531-.9394532 5.2929688 5.2929688z"></path><path fill="#676f4b" d="m17.1464844 8.1464844c-.1337891.1337891-.1806641.3320312-.1210938.5117188.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4103394 1.4104614-5.2929687-5.2929688 1.4103394-1.4104614c.8837891-.8833008 2.0527344-1.3549805 3.2548828-1.3549805.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6464843-3.6464844 1.2929688 1.2929688z"></path><path opacity=".1" d="m8.4998169 10.2068481-5.2928467 5.2930909.5092774.5092773 5.2767658-5.3091717z"></path><path opacity=".1" d="m2.0605469 17.6650391.9394531-.9580079-.5-.5-.9394531.9394531c-.3613281.3613282-.5605469.8417969-.5605469 1.3535157s.1992188.9921875.5605469 1.3535156l.4143677.4143677c-.3024903-.3477783-.4749146-.7832642-.4749146-1.2493286 0-.5117188.1992188-.9921875.5605469-1.3535156z"></path><path opacity=".1" d="m14.3720703 7.2529297c.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6578121-3.6537108-.5113278-.5113283-3.6464844 3.6464844c-.1337891.1337891-.3310547.1821289-.5117188.1206055-.4833984-.1611328-.9794922-.2397461-1.4697266-.2397461-1.2021484 0-2.3710938.4716797-3.2548828 1.3549805l-1.4103393 1.4104614.5092773.5092773 1.401062-1.4011841c.8837892-.8833007 2.0527345-1.3549804 3.2548829-1.3549804z"></path><g fill="#fff"><path transform="matrix(.7025585 -.711626 .711626 .7025585 -9.489386 13.071864)" opacity=".2" d="m7.148615 17.527449h7.487697v.720234h-7.487697z"></path><path opacity=".2" d="m6.3550715 21.9159241c-.7246094.7226562-1.9824219.7226562-2.7070312 0l.5.5185547c.7246094.7226562 1.9824219.7226562 2.7070312 0l.9378973-.9344788-.5113282-.5113277z"></path><path opacity=".2" d="m17.1480408 8.14151 3.6464844-3.6464849-.5125713-.5060406-3.633913 3.6339703c-.1337891.1337891-.1806641.3320312-.1210938.5117192.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4258442 1.420042.5155048.5089741 1.4103394-1.4104614c1.2451172-1.2441406 1.6728516-3.0541992 1.1152344-4.7241211-.0595704-.1796874-.0126954-.3779296.1210937-.5117187z"></path></g><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 4.654437 15.986806)" fill="#fed4a3" d="m20.533957 1.814287h2.182087v1.121427h-2.182087z"></path><path fill="url(#a)" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path></div>
        <div className="card__title">{e.name}</div>
        <div className="card__subtitle">{e.description}</div>
        <div className="card__wrapper">
          <div className="card__price">{e.price} $</div>
          <div className="card__counter">
            <button className="button"  data-bs-toggle="modal" data-bs-target="#buyBtn">
              Shop now
              <svg className="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </button>
            {/* <button type="button" className="btn btn-primary" >
  Launch demo modal
</button> */}

            <div className="modal fade" id="buyBtn" tabindex="-1" aria-labelledby="buyBtnLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="buyBtnLabel">Are you sure?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                    {`Are you sure to buy ${e.name} with ${e.price} $ ?`}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button  onClick={()=>props.deliteCar(e.id)} type="button" className="btn btn-primary"data-bs-dismiss="modal">BUY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
</div>




  </div>
  )
};

export default Home;
