import React from 'react'
import Videoitem from './Videoitem'


export default function Video() {
    return (
        <div className="container" my-3>
          <h2>MyVideo- Today's Top Trending </h2>
          <div className="row my-4">
              <div className="col-md-4 ">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card'Some qut."imageurl=" "/>
                  
              </div>
              <div className="col-md-4">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card'Some qui."imageurl="    "/>

              </div>
              <div className="col-md-4">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card'Some qui."imageurl="    "/>

              </div>
              <div className="col-md-4">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card's content."imageurl="   "/>

              </div>
              <div className="col-md-4">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card's content."imageurl="  "/>

              </div>
              <div className="col-md-4 ">
                  <Videoitem title="djvnk" descripsion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

              </div>
              
          </div>


      </div>
    )
}
