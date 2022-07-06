interface LoginDto {
  username: string;
  password: string;
  remember: boolean;
}

interface SignUpDto {
  name: string;
  surname: string;
  username: string;
  password: string;
  verifyPassword: string;
  gender: string;
  age: number;
  address?: string;
  email: string;
  city: string;
}

interface AnimalResponseDto {
  name: string;
  georange: string;
  image: string;
}

interface AnimalDetailResponseDto extends AnimalResponseDto {
  latinName: string;
  type: string;
  habitat: string;
  diet: string;
  isFavorite?: boolean;
}

interface CreateAnimalRequestDto {
  name: string;
  georange: string;
  image: string;
  latinName: string;
  type: string;
  habitat: string;
  diet: string;
}

interface UpdateAnimalRequestDto {
  name?: string;
  georange?: string;
  image?: string;
  latinName?: string;
  type?: string;
  habitat?: string;
  diet?: string;
}
