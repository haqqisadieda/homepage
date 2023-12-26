import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const pandaImage = `/images/logo${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/">
      <LogoBox>
        <Image src={pandaImage} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight="bold"
          ml={3}
        >
          Pandega Haqqi Sadieda
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
