import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { MENU_HEIGHT } from "./config";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  showMenu: boolean;
}

const Wrapper = styled.div<{showMenu: boolean}>`
  position: absolute;
  right: 20px;
  top: ${({showMenu}) => showMenu ? `${MENU_HEIGHT + 20}px` : "20px"};
  z-index: 100;
`

const UserBlock: React.FC<Props> = ({ account, login, logout, showMenu }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Wrapper showMenu={showMenu}>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </Wrapper>
  );
};

export default UserBlock;
