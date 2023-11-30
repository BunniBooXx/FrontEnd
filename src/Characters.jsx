import React from 'react';

const Characters = () => {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #ffb6c1, #add8e6)',
  };

  return (
    <div className="p-8 space-y-8" style={containerStyle}>
      <div className="flex items-center">
        <div className="flex-1">
          <img
            src="/soowon_character_photo.jpeg"
            alt="Soowon"
            className="w-full rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-lg font-serif mb-4 leading-relaxed text-pink-800">
            Soo-Won is a tall young man with soft, delicate features. He takes after his mother Yong-Hi,
            while his height takes after his father, Yu-Hon. He has sea green-blue eyes and white skin. His dark blond hair extends
            slightly past his shoulders and is usually tied into a side ponytail using a gold ornament (initially a small ribbon in the manga).
            His bangs are parted down the center, and some strands are longer and wavier than the normal cut.
            As a child, his hair worn loose and shoulder-length. He was considered by Yona to be "cute like a girl",
            but as he grew up his features became more tough, while retaining some of the same softness. He is
            considered very handsome by his people after ascending the throne.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1">
          <img src="/hak_smiling_2.jpg" alt="Hak" className="w-full rounded-full shadow-lg" />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-lg font-serif mb-4 leading-relaxed text-pink-800">
            Hak is described as a tall, tough-bodied, and attractive young man with sharp blue eyes and broad shoulders.
            He has short messy black hair with bangs hanging below his eyes. He has a well-built frame cultivated from years of training,
            which tends to make him quite popular with girls. He wears a sleeveless blue overcoat seamed with bluish-black hemlines over a
            royal blue robe with a black collar and sash. He ties black ribbons in a crisscross pattern over the lower half of his sleeves to
            prevent them from getting in the way when he is fighting. Underneath his robe, he wears black pants and a pair of dark brown
            boots overlaid with more crisscross-patterned ribbons.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-full rounded-full overflow-hidden">
          <img src="/yona_character_image.jpg" alt="Yona" className="w-full" />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-lg font-serif mb-4 leading-relaxed text-pink-800">
            Yona is a beautiful girl of short stature, curly red hair and round violet eyes.
            She often wears a cape with a hood to hide her full appearance, particularly her red hair,
            which attracts the attention of the nobles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Characters;

