// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { DocumentTextIcon } from "@sanity/icons";
import { CaseIcon } from "@sanity/icons";

const pluraDocumentTypes = ["service", "page"];

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("page").title("Pages").icon(DocumentTextIcon),
      S.documentTypeListItem("service").title("Services").icon(CaseIcon),
      // list all document types except 'page'
      ...S.documentTypeListItems().filter(
        (item) => !pluraDocumentTypes.includes(item.getId())
      ),
    ]);
