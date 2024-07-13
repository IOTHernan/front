import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  storage = getStorage();

  uploadImage(file: File, name: string): Promise<void> {
    const storageRef = ref(this.storage, `imagen/${name}`);
    return new Promise<void>((resolve, reject) => {
      uploadBytes(storageRef, file)
        .then(() => {
          resolve(); // La carga se completó correctamente
        })
        .catch((error) => {
          reject(error); // Hubo un error en la carga
        });
    });
  }

  getImageUrl(name: string): Promise<string> {
    const storageRef = ref(this.storage, `imagen/${name}`);
    return getDownloadURL(storageRef);
  }
}
