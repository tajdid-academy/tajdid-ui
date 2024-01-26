import { Button } from '@/components';
import HomeIcon from '@/icons/home-icon';

export default function ButtonPreview() {
  return (
    <div className="grid gap-2">
      <p className="mb-2">Button</p>
      <div className="flex gap-2">
        <Button>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="icon">
          <HomeIcon />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button color="gray">Contained </Button>
        <Button variant="outlined" color="gray">
          Outlined
        </Button>
        <Button variant="ghost" color="gray">
          Ghost
        </Button>
        <Button variant="link" color="gray">
          Link
        </Button>
        <Button variant="icon" color="gray">
          <HomeIcon />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button color="error">Contained </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="ghost" color="error">
          Ghost
        </Button>
        <Button variant="link" color="error">
          Link
        </Button>
        <Button variant="icon" color="error">
          <HomeIcon />
        </Button>
      </div>
    </div>
  );
}
