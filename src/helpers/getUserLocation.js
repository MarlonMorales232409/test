import Swal from 'sweetalert2'

export const getUserLocation = async ()=> {

    return new Promise((resolve, reject)=> {
        
        navigator.geolocation.getCurrentPosition(
            ({coords})=>{
                resolve([coords.longitude, coords.latitude,])
            },
            (error)=> {
                // Custom alert config
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "We can't get your current location!, Barcelona City will be used as a default location",
                    confirmButtonColor: "#007bffb2",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false,

                  })
                reject(error)
            }
        )
    })

}