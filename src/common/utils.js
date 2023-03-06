const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))
//const admin_url = 'https://e1bc-103-68-18-201.ngrok.io'

const admin_url = "https://admin.travelrover.in"


export{
	toDataURL,
	admin_url
}