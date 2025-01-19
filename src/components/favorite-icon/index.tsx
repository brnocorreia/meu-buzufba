import { Heart, HeartIcon } from "lucide-react";

interface FavoriteIconProps {
  isFavorite: boolean;
  handleFavorite: () => void;
}

export default function FavoriteIcon({
  isFavorite,
  handleFavorite,
}: FavoriteIconProps) {
  if (isFavorite) {
    return (
      <Heart
        className="w-6 h-6 text-red-500 fill-red-500 cursor-pointer"
        onClick={handleFavorite}
      />
    );
  }
  return (
    <HeartIcon
      className="w-6 h-6 text-zinc-500 cursor-pointer"
      onClick={handleFavorite}
    />
  );
}
