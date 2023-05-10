const DemoVideo = () => {
  return (
    <div className="border border-black w-full">
      <video className="aspect-[16/9] w-full" controls muted loop preload="none" poster="/assets/images/demo-thumb.jpg">
        <source src="/assets/videos/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DemoVideo;
