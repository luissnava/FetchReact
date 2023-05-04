function getSuspender(promise){
    let status = 'pending'
    let response

    const suspender = promise.then(
        (res) =>{
            status = "succes"
            response = res
        },
        (err) => {
            status = 'error'
            response = err
        }
    )

    const read = () =>{
        switch (status) {
            case 'pending':
                throw suspender
            
            case 'error':
                throw response

            default:
                return response
        }
    }

    return {read}
}

export default function fetchData(url){
    const promise = fetch(url)
    .then((response)=> response.json())
    .then((data)=> data)

    return getSuspender(promise)
}