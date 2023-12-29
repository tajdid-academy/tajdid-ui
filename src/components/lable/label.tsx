type LableProps = {
  text: string;
};

export default function Lable({ text }: LableProps) {
  return <label className="text-sm font-medium text-gray-700">{text}</label>;
}
