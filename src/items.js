 import React from 'react'
{/* rendering the data from the fake API to be be sure that importing was a success */}
    const Items = ({ items }) => {
      return (
        <div>
          <center><h1>Items List</h1></center>
          {items.map((item) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.firstname} {item.lastname}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.email}</h6>
                <p class="card-text">{item.message}</p>

              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Items