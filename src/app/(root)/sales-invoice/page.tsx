import SearchInput from './sales-invoice-search';
import DialogFilter from '~/components/shared/dialog-filter';

export default function SearchInvoice() {
  return (
    <>
      <SearchInput />

      <DialogFilter
        titleFilter="Sales Invoice"
        titleFilterDesc="some filter for sales invoice"
      >
        <div>some dialog filter</div>
      </DialogFilter>
    </>
  );
}
