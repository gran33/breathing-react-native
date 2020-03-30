declare interface Step {
  number: number;
  description: string;
  image: string;
}

declare interface Device {
  name: string;
  owner: string;
  image: string;
  steps: Step[];
}
