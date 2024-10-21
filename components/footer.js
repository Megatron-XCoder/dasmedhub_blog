import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-4 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          <a
            href="/"
            rel="noopener"
            target="_blank">
            DASmedhub
          </a>
        </span>
        <span>---</span>
        <span>
          {" "}
          <a
            href="/"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
          <ThemeSwitch />
      </div>
    </Container>
  );
}

