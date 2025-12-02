const gamesdata = [
  // 1. Elden Ring
  {
    id: "1",
    title: "Elden Ring",
    coverPhoto: "https://wallpapers.com/images/hd/elden-ring-poster-6r85th0gnhifsqd0.jpg",
    category: "Action RPG",
    shortDescription: "Explore a vast mythical land filled with magic and legendary creatures.",
    fullDescription:
      "Elden Ring is an open-world action RPG created by FromSoftware and George R. R. Martin. Journey across the Lands Between, battle towering bosses, unlock powerful weapons, and shape your own path in a fantasy world filled with mystery.",
    developer: "FromSoftware",
    ratings: "4.9",
    releaseYear: 2022,
    platforms: ["PC", "PS5", "Xbox"],
    downloadLink: "https://en.bandainamcoent.eu/elden-ring/elden-ring"
  },

  // 2. The Witcher 3
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    coverPhoto: "https://external-preview.redd.it/MYRsWdIStstgD6Wdi_MmNxVFvlfYBblUsJJRnZrWTQQ.jpg?width=1080&crop=smart&auto=webp&s=51cfb4928516e672a90e36c36f4838c30eb29d73",
    category: "Open World RPG",
    shortDescription: "A story-rich fantasy adventure starring monster hunter Geralt.",
    fullDescription:
      "The Witcher 3 is a massive open-world RPG where you play as Geralt of Rivia, a monster slayer navigating a world shaped by choices. Fight mythical creatures, uncover political conflicts, and explore stunning landscapes.",
    developer: "CD Projekt Red",
    ratings: "4.8",
    releaseYear: 2015,
    platforms: ["PC", "PS4/5", "Xbox", "Nintendo Switch"],
    downloadLink: "https://thewitcher.com/en/witcher3"
  },

  // 3. Overwatch 2
  {
    id: "3",
    title: "Overwatch 2",
    coverPhoto: "https://cdn.mos.cms.futurecdn.net/dTtGDzq3ppzMt8mcb28kMo.jpg",
    category: "Team Shooter",
    shortDescription: "A fast-paced 5v5 team shooter with unique heroes and abilities.",
    fullDescription:
      "Overwatch 2 is a colorful hero-based shooter featuring intense 5v5 battles. Choose from a diverse roster of heroes, each with unique abilities, and work with your team to secure objectives and dominate the match.",
    developer: "Blizzard Entertainment",
    ratings: "4.6",
    releaseYear: 2023,
    platforms: ["PC", "PS5", "Xbox", "Nintendo Switch"],
    downloadLink: "https://overwatch.blizzard.com/"
  },

  // 4. Roblox
  {
    id: "4",
    title: "Roblox",
    coverPhoto: "https://wallpapercave.com/wp/wp7987103.jpg",
    category: "Online Sandbox",
    shortDescription: "A massive platform where players can create and explore worlds.",
    fullDescription:
      "Roblox is a global online platform that allows players to create and experience millions of unique worlds. From simulators to adventure games, Roblox offers endless creativity and fun.",
    developer: "Roblox Corporation",
    ratings: "4.7",
    releaseYear: 2006,
    platforms: ["PC", "Mobile", "Xbox"],
    downloadLink: "https://www.roblox.com/"
  },

  // 5. Hunter Assassin
  {
    id: "5",
    title: "Hunter Assassin",
    coverPhoto: "https://th.bing.com/th/id/R.9f685b97f3f76083721fd2c62cf127da?rik=jhhIc%2bjXDUmzIQ&pid=ImgRaw&r=0",
    category: "Stealth Action",
    shortDescription: "A tactical assassin game focused on stealth and speed.",
    fullDescription:
      "Hunter Assassin challenges players to eliminate enemies by using stealth, traps, and strategy. Move silently, hide in shadows, and complete missions while avoiding detection.",
    developer: "Ruby Game Studio",
    ratings: "4.4",
    releaseYear: 2019,
    platforms: ["Mobile"],
    downloadLink: "https://play.google.com/store/apps/details?id=com.rubygames.assassin"
  },

  // 6. 8 Ball Pool
  {
  id: "6",
  title: "Bounce Tales",
  coverPhoto: "https://rogcommunity.id/wp-content/uploads/2024/01/game-bounce-tales-1-1024x576.jpg",
  category: "Arcade / Puzzle",
  shortDescription: "Bounce through colorful levels, solve puzzles, and reach the goal without falling.",
  fullDescription:
    "Bounce Tales is an addictive arcade-puzzle game where players control a bouncing ball through vibrant and challenging levels. Avoid obstacles, collect stars, and complete puzzles to advance. With smooth mechanics, engaging level design, and colorful visuals, Bounce Tales offers endless fun for casual gamers.",
  developer: "PixelPlay Studios",
  ratings: "4.6",
  releaseYear: 2021,
  platforms: ["Mobile"],
  downloadLink: "https://play.google.com/store/apps/details?id=com.AdlemGames.BounceTales&hl=en-US"
}
,

  // 7. Traffic Rider
  {
    id: "7",
    title: "Traffic Rider",
    coverPhoto: "https://img.civilitythegame.com/Img/Traffic_Rider_0e18f5.jpg",
    category: "Racing",
    shortDescription: "A first-person motorbike racing game filled with missions.",
    fullDescription:
      "Traffic Rider delivers immersive motorcycle racing with realistic sounds, missions, and endless highway challenges. Play through career mode and upgrade your bikes.",
    developer: "Soner Kara",
    ratings: "4.6",
    releaseYear: 2016,
    platforms: ["Mobile"],
    downloadLink: "https://play.google.com/store/apps/details?id=com.skgames.trafficrider"
  },

 {
  id: "8",
  title: "Asphalt 8: Airborne",
  coverPhoto: "https://www.androidpolice.com/wp-content/uploads/2013/08/nexusae0_A8_screen_2048x1536_EN_02.jpg",
  category: "Arcade Racing",
  shortDescription: "High-speed arcade racing with stunning tracks, cars, and aerial stunts.",
  fullDescription:
    "Asphalt 8: Airborne is an action-packed arcade racing game featuring over 250 high-performance cars and bikes, breathtaking tracks, and gravity-defying stunts. Drift, boost, and perform aerial tricks while racing online or in career mode. With fast-paced gameplay and vibrant graphics, it remains one of the most popular mobile racing titles.",
  developer: "Gameloft",
  ratings: "4.7",
  releaseYear: 2013,
  platforms: ["Mobile", "PC"],
  downloadLink: "https://www.gameloft.com/game/asphalt-8/"
}
,

  
  {
  id: "9",
  title: "Farm Frenzy",
  coverPhoto: "https://th.bing.com/th/id/R.acc7d29ec630343f9078954e433f09d3?rik=yjp7ri38sCR25g&riu=http%3a%2f%2fcdn.ghstatic.com%2fimages%2fscreens%2f200560%2f1%2f3.jpg&ehk=m8F4wTuVNZlS5SWx2P7VvYBjRrXD5%2b5oaqfZEw64SvY%3d&risl=&pid=ImgRaw&r=0",
  category: "Casual / Time Management",
  shortDescription: "Manage your farm, raise animals, harvest products, and grow your farming empire.",
  fullDescription:
    "Farm Frenzy is a classic time-management farming game where players raise animals, grow crops, harvest produce, and manage resources to expand their farm. With hundreds of levels, upgrades, challenges, and fun animations, it delivers an addictive management experience that keeps players engaged for hours.",
  developer: "Alawar Entertainment",
  ratings: "4.5",
  releaseYear: 2007,
  platforms: ["Mobile", "PC"],
  downloadLink: "https://www.alawar.com/game/farm-frenzy/"
}
,

 
  {
  id: "10",
  title: "Minecraft",
  coverPhoto: "https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106252_1280.jpg",
  category: "Sandbox / Survival",
  shortDescription: "A limitless sandbox world where players craft, build, explore, and survive.",
  fullDescription:
    "Minecraft is a global sandbox phenomenon where players can explore infinite worlds, gather resources, craft tools, build structures, and battle creatures. Featuring various modes like Survival, Creative, and Adventure, Minecraft allows endless creativity and exploration. With multiplayer support and constant updates, it remains one of the most iconic games ever made.",
  developer: "Mojang Studios",
  ratings: "4.9",
  releaseYear: 2011,
  platforms: ["PC", "Console", "Mobile"],
  downloadLink: "https://www.minecraft.net/en-us"
}
,

  
  {
  id: "11",
  title: "War Drone",
  coverPhoto: "https://cdn-www.bluestacks.com/bs-images/featured_com.miniclip.drone1.jpg",
  category: "Action / Tactical Shooter",
  shortDescription: "Control advanced combat drones and complete high-risk tactical missions.",
  fullDescription:
    "War Drone is an action-packed tactical shooter where players command advanced military drones in high-stakes missions. Engage in air strikes, reconnaissance ops, stealth infiltration, and real-time strategic battles. Featuring realistic environments, drone customization, and intense missions, War Drone offers a unique futuristic warfare experience.",
  developer: "AeroTech Studios",
  ratings: "4.6",
  releaseYear: 2022,
  platforms: ["PC", "Mobile"],
  downloadLink: "https://example.com/war-drone"
}
,

  
  {
  id: "12",
  title: "Delta Force",
  coverPhoto: "https://cdn2.unrealengine.com/delta-force-operations-1920x1080-a4c97eabf4ae.png",
  category: "Tactical FPS",
  shortDescription: "A high-intensity tactical shooter focused on strategic missions and elite combat.",
  fullDescription:
    "Delta Force is a tactical first-person shooter where players engage in elite special operations missions across dangerous warzones. Featuring realistic gunplay, strategic squad-based mechanics, and high-stakes infiltration objectives, the game emphasizes precision, teamwork, and battlefield strategy. With immersive environments and modern combat tools, Delta Force delivers an authentic elite-forces experience.",
  developer: "TiMi Studio Group",
  ratings: "4.7",
  releaseYear: 2024,
  platforms: ["PC", "Console"],
  downloadLink: "https://www.deltaforce.com" 
}

];

export default gamesdata;
