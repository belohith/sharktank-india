function SharkProfile(shark) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#0e0e0e"}} className="stat-box2">
          <img src={shark.imageUrl} alt={shark.name} style={{ width: '250px', height: '250px', marginRight: '20px', borderRadius: "5px" }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left'}}>
            <h1>{shark.name}</h1>
            <p>Occupation: {shark.occupation}</p>
            <p>Education: {shark.education}</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default SharkProfile;
  