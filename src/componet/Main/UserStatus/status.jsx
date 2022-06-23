import React, { useState, useEffect, Fragment } from "react";
import SearchButton from "../../SeachButton/search";
import "./style.css";




async function getDataUser(id) {
  let responde = await fetch(`https://api.github.com/users/${id}`);
  let data = await responde.json();
  return data;
}
async function getRepositores(id) {
  let  respondeRe = await fetch(`https://api.github.com/users/${id}/repos`);
  let dataRe = await respondeRe.json( );
  return dataRe;
}



const UserStatus = () => {


  const [dataUser, setDataUser] = useState([]);
  const [repositores, setRepositores] = useState([{}]);

  useEffect(() => {
    getDataUser(loginUser()).then((data) => {
      setDataUser(data);
    });
  },[]);

  useEffect(() => {
    getRepositores(loginUser()).then((dataRe) => {
      setRepositores(dataRe);
    });
  },[]);  

  const loginUser = ()=>{
    let nameUser = 'MatheusDavy'
    return nameUser
  }

  if (dataUser.name === loginUser) {
    return (
      <Fragment>
        <SearchButton/>
        <div className="container__principal">
        <main className="content">
          <h1>ERROR 404</h1>
          <p>
            <span>User not found</span>
            <br/>
            <span>Please search another user</span>
          </p>
        </main>
      </div>
      </Fragment>
    )
  } else {
    return (
     <Fragment>
      <SearchButton />
       <div className="container__principal">
        <div className="user__status">
          <img className="card" src={dataUser.avatar_url} alt='user'/>
          <strong>{dataUser.login}</strong>
          <span>{dataUser.name}</span>
          <p>{dataUser.bio}</p>
          <a href={dataUser.html_url}>
            <button>More</button>
          </a>
        </div>

        <div className=" container__information">
          <div className="container__others">
            <h1>Others</h1>
            <hr />
            <ul>
              <li>
                <div>Followers</div>
                <span>{dataUser.followers}</span>
              </li>
              <li>
                <div>Following</div>
                <span>{dataUser.following}</span>
              </li>
            </ul>
          </div>

          <div className="container_repositores">
            <h1>Repositores</h1>
            <hr />
            <div className="repositores">
              {repositores.map((repositores) => {
                return (
                  <div className="container__repos">
                    <span>{repositores.name}</span>
                    <a href={repositores.html_url} rel="noreferrer" target="_blank">
                      <button>More</button>
                    </a>
                  </div>
                );
              })}
            </div>
            ;
          </div>
        </div>
      </div>
     </Fragment>
    );
  }
};

export default UserStatus;
