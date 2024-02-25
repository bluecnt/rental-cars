// [SGLEE:20240223FRI_125800] Created

import PageContainer from "../../components/common/PageContainer";
import ContentContainer from "../../components/common/ContentContainer";
import BlueDialog from "./BlueDialog";
import { Button } from "react-bootstrap";
import { useState } from "react";

interface TestBlueDialogState {
  dlgShow: boolean;
}

const TestBlueDialog = () => {
  const [state, setState] = useState<TestBlueDialogState>({
    dlgShow: false,
  });

  const handleClickShowDlg = () => {
    setState((prev) => ({ ...prev, dlgShow: true }));
  };

  const handleClickDlgOkBtn = () => {
    setState((prev) => ({ ...prev, dlgShow: false }));
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Button onClick={handleClickShowDlg}>대화상자 표시</Button>

        {state.dlgShow && (
          <BlueDialog
            placeholderForPage={false}
            useBackdrop={false}
            //
            margin="0 0 2rem 0"
            justify="center"
            align="flex-end"
            //
            title="제목"
            footerNode={
              <Button style={{ flex: "1" }} onClick={handleClickDlgOkBtn}>
                확인
              </Button>
            }
          >
            <Button>버튼</Button>
          </BlueDialog>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default TestBlueDialog;
