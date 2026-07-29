import avatar1 from "../../assets/AvatarStack/avatar-1.png";
import avatar2 from "../../assets/AvatarStack/avatar-2.png";
import avatar3 from "../../assets/AvatarStack/avatar-3.png";
import avatar4 from "../../assets/AvatarStack/avatar-4.png";
import avatar5 from "../../assets/AvatarStack/avatar-5.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

// Social-proof avatar stack. Not part of the original Figma export this
// project was reverse-engineered from — added because assets.zip
// included 5 student avatar images with no other obvious home. Placed in
// the hero as a "+250 students" trust strip, echoing the "جامعه فعال"
// stat card's number. Remove this component if it's not wanted.
//
// NOTE: the 5 source images referenced above are not present in this
// project (see assets/AvatarStack/MISSING_ASSETS.md) and this component
// is not currently rendered anywhere in App.jsx, so it does not affect
// the build unless it is imported and used.
export default function AvatarStack({ label }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <div className="flex -space-x-3 [direction:ltr]">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            className="w-8 h-8 rounded-full border-2 border-white/90 object-cover"
          />
        ))}
      </div>
      {label && <p className="text-sm font-semibold text-white/85">{label}</p>}
    </div>
  );
}
