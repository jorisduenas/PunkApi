export default class Beer {
  #id;
  #name;
  #description;
  #imageUri;
  constructor(id, name, description, imageUri) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#imageUri = imageUri;
  }
  getId(){
    return this.#id;
  }

  getName(){
    return this.#name;
  }

  getDescription(){
    return this.#description;
  }

  getImageUri(){
    return this.#imageUri;
  }
}
