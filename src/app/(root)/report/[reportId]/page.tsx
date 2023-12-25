export default function ReportId({ params }: { params: { reportId: string } }) {
  const { reportId } = params;
  return (
    <div>
      <h1>Report Id {reportId}</h1>
    </div>
  );
}
