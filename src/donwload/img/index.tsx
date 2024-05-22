export interface getBase64ForImageDonwloadProps {
    url:string
}


export const getBase64ForImageDonwload = async ({url}:getBase64ForImageDonwloadProps) => {
    const response = await fetch(url)
    const blob = await response.blob() 

    const result =  new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
          resolve(`${this.result ?? ''}`)
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(blob);
      });
      return await result
}