import './App.css'

// eslint-disable-next-line react/prop-types
const Profile  = ({img, name, location, quote}) => {
    return(
        <>
            <img src={img} alt={""} />
            <h3>{name}</h3>
            <h6>{location}</h6>
            <h5>{quote}</h5>
        </>
    )
}

export default Profile