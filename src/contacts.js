import React from 'react'



    const Items = ({ items }) => {
      return (

        <div>
          <center><h1>Items List</h1></center>
          {items.map((item) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.startDateTime}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.endDateTime}</h6>
                <p class="card-text">{item.name}</p>
                <p>{item.classes}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };
    

    export default Items;