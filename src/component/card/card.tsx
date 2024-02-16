import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface CardComponentProps {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreText: string;
}

function CardComponent({
  imageSrc,
  title,
  description,
  learnMoreText,
}: CardComponentProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const truncatedDescription = description.split(" ").slice(0, 10).join(" ");

  return (
    <div className="card flex flex-col my-12 w-full justify-center items-center">
      <Card
        placeholder={undefined}
        className="w-72 max-w-[48rem] h-full flex-row"
      >
        <CardHeader
          placeholder={undefined}
          shadow={true}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={imageSrc}
            alt="card"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody placeholder={undefined} className="-mt-2">
          <Typography
            placeholder={undefined}
            variant="h6"
            color="gray"
            className="uppercase text-md"
          >
            {title}
          </Typography>
          <Typography
            placeholder={undefined}
            variant="small"
            color="gray"
            className="py-2 font-serif text-wrap"
          >
            {truncatedDescription}...
          </Typography>
          <Button
            placeholder={undefined}
            onClick={handleOpen}
            variant="text"
            className="flex items-center gap-2 w-36 hover:bg-yellow-300 -ml-2 border border-yellow-400 text-xs"
            size="sm"
          >
            <span className="text-xs text-yellow-60">{learnMoreText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </CardBody>
      </Card>

      <Dialog
        placeholder={undefined}
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader placeholder={undefined}>{title}</DialogHeader>
        <DialogBody placeholder={undefined} className="-mt-4">
          {description}
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            placeholder={undefined}
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder={undefined}
            variant="gradient"
            color="green"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default CardComponent;
