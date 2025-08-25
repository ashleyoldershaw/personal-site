import { DisplayItem } from "@/components/display";
import { Footer } from "@/components/footer";
import { Paragraph, Subtitle, Title } from "@/components/text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Title>Ash Oldershaw</Title>
        <Subtitle>Software Manager</Subtitle>
        <Paragraph>
          Morbi congue tellus sit amet elit euismod placerat. Quisque arcu arcu,
          ultricies non cursus auctor, consectetur non velit. Ut eget semper
          diam. Ut laoreet, risus quis laoreet egestas, nibh elit placerat nibh,
          vel gravida lectus turpis ut nisi. Sed leo erat, ornare sit amet neque
          in, interdum sodales elit. Phasellus posuere, ligula et efficitur
          dignissim, nisl neque ultricies dui, in volutpat urna erat nec neque.
          Maecenas porta lobortis metus, sit amet ullamcorper velit consectetur
          sit amet. Aliquam in lorem sed metus malesuada malesuada sed sed urna.
          Etiam hendrerit lacinia efficitur. Donec imperdiet nibh et ipsum
          varius posuere. Nam est magna, malesuada eget dignissim vel, pretium
          at ligula. Nullam hendrerit dolor ut nulla interdum hendrerit.
          Vestibulum non orci pharetra, laoreet enim id, facilisis felis. Aenean
          non neque a lectus accumsan consequat. Curabitur dignissim elementum
          purus eget cursus. Mauris nisl elit, suscipit eu tempor nec, congue
          hendrerit leo.
        </Paragraph>
        <Paragraph>
          Vivamus tincidunt dolor malesuada, facilisis risus vitae, ultrices
          tellus. Donec vitae mauris ligula. In ultricies congue enim.
          Suspendisse sapien velit, pretium accumsan dignissim vel, vehicula nec
          velit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nulla lobortis dapibus arcu cursus
          pharetra. Nunc diam turpis, tincidunt a enim at, laoreet auctor magna.
          Vestibulum placerat pellentesque finibus. Curabitur sed ante non enim
          pellentesque pharetra vitae nec leo. Cras placerat iaculis magna a
          efficitur. Donec eu ornare dolor. Pellentesque at dui urna. Mauris nec
          lorem leo.
        </Paragraph>
        <DisplayItem
          title={"example"}
          subtitle={"foobar, barbaz"}
          body={"Lorem ipsum dolor sit amet"}
        />
      </main>
      <Footer />
    </div>
  );
}
