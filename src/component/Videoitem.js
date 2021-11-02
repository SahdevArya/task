import React from 'react'
import popupbox from './popupbox'

export default function Videoitem(props) {

  
    return (
        <div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <video width="420" height="240" controls>
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"></source>
       does not supported
        </video>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
            <div class="card" style={{width : "18rem"}}>
  <img src={props.imageurl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.descripsion}</p>
  </div>
  
  
  <div class="card-body">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
    {/* <a href="#" class="card-link" >Card link</a> */}
    
  </div>
</div>
        </div>
    )
}
