import { CardIcon } from "../icons/CardIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const defaultStyles = "p-3 bg-white border-gray rounded-md max-w-72 border";

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&showinfo=0`;
};

const isValidYouTubeLink = (url: string) =>
  url.startsWith("https://www.youtube.com/watch?v=") || url.startsWith("https://youtu.be/");

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className={`${defaultStyles}`}>
        <div className="flex justify-between">
          <div className="flex items-center font-medium">
            <div className="text-gray-500 pr-2">
              <CardIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-3">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500 pr-1">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && isValidYouTubeLink(link) ? (
            <iframe
              className="w-full"
              src={getYouTubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : type === "youtube" ? (
            <p className="text-red-500">Invalid YouTube link</p>
          ) : (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
