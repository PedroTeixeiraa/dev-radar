import React, {useState, useEffect} from 'react'
import './styles.css'

function DevForm({ onSubmit }){

    const [techs, setTechs] = useState('')
    const [github_username, setGithubUsername] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude , setLongitude] = useState('')

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
            
            const { latitude, longitude} = position.coords
    
                setLatitude(latitude)
                setLongitude(longitude)
            },
            (error) => {
                console.log(error)
            },
            {
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(e){
        e.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setTechs('')
        setGithubUsername('')
    }

    return(  
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do GitHub</label>
                <input 
                    name="github_username" 
                    className="github_username" 
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>
          
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input 
                    name="techs" 
                    className="techs"  
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>
          
            <div className="input-group">

                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        className="latitude" 
                        required 
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                        type="number" 
                        name="longitude" 
                        className="longitude" 
                        required 
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm