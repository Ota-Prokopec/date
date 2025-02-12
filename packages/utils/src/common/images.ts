import type { ChangeEvent } from 'react';

export const base64ToBlob = (base64: string, contentType: string, sliceSize = 512) => {
  const byteCharacters = atob(base64);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const blobTostring = (blob: Blob): Promise<string> => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
};

export const countSameItemsInArray = <InputArr extends Array<any>>(
  arr: InputArr
): Record<string, number> =>
  arr.reduce(
    (cnt, cur) => (
      (cnt[typeof cur === 'string' ? cur : JSON.stringify(cur)] =
        cnt[typeof cur === 'string' ? cur : JSON.stringify(cur)] + 1 || 1),
      cnt
    ),
    {}
  );

export const roundNumber = (num: number, digits: number): number => {
  const value = JSON.parse(num.toFixed(digits));
  if (typeof value === 'number') return value;
  throw new Error('Input is not a number');
};

export const arrayBufferIntoBase64 = (arrBuff: ArrayBuffer): string => {
  const uint8Array = new Uint8Array(arrBuff);
  const binary = uint8Array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
  return btoa(binary);
};
export const fileTostring = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
  });
};

export const base64ToFile = (base64: string, fileName: string) => {
  const parts = base64.split(';base64,');
  const part0 = parts[0];
  const part1 = parts[1];
  if (!part0 || !part1) throw new Error('Invalid base64 string');
  const contentType = part0.split(':')[1];
  const raw = window.atob(part1);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new File([uInt8Array], fileName, { type: contentType });
};

export const base64ToBuffer = (base64: string) => {
  const parts = base64.split(';base64,');
  const part1 = parts[1];
  if (!part1) throw new Error('Invalid base64 string');

  const raw = window.atob(part1);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return uInt8Array.buffer;
};

export const readHTMLImageInput = async (event: ChangeEvent<HTMLInputElement>) => {
  return new Promise<File>((resolve, reject) => {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        const image = e.target?.result;
        if (!image) {
          reject('Event.target is null');
          throw new Error('Event.target is null');
        }

        if (typeof image !== 'string') resolve(base64ToFile(arrayBufferIntoBase64(image), 'image'));
        else resolve(base64ToFile(image, 'image'));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  });
};
