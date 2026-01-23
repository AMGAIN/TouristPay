export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen w-[400px] flex justify-center bg-gray-200">
      <div className="relative w-full max-w-[400px] min-h-screen bg-[#FAFAFA] shadow-xl overflow-y-auto no-scrollbar pb-24">
        {children}
      </div>
    </div>
  );
}
