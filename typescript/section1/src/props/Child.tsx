interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, children, onClick }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>click me</button>
    </div>
  );
};
