
import React from 'react';
import { Coffee, ChartNoAxesCombined, ArrowRight } from 'lucide-react';

interface RoleSelectionScreenProps {
  onSelectRole: (role: 'cashier' | 'owner') => void;
}

export const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({
  onSelectRole,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#7F9995]">

      {/* Header */}
      <header className="bg-[#A3431B] px-4 py-10 text-center text-[#141414]">
        <p className="text-xs uppercase tracking-[0.25em] mb-4">
          Tongkrongan Hiroo POS
        </p>

        <h1 className="font-brand text-5xl sm:text-6xl">
          tongkrongan Hiroo
        </h1>

        <p className="mt-3 text-sm tracking-wide">
          Sistem Manajemen Kedai
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-5 py-12">

        <div className="w-full max-w-4xl">

          <div className="text-center mb-10">
            <h2 className="font-brand text-3xl text-[#141414]">
              Selamat Datang!
            </h2>

            <p className="mt-3 text-sm text-[#263330]">
              Silakan pilih jenis akses untuk melanjutkan.
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Cashier Card */}
            <button
              type="button"
              onClick={() => onSelectRole('cashier')}
              className="hiroo-card p-8 text-left group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-full bg-[#F5E56B] flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-[#65451F]" />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#8B6B43]">
                  Staff
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#141414]">
                Akses Kasir
              </h3>

              <p className="mt-3 text-sm text-[#5A554E] leading-relaxed">
                Kelola pesanan pelanggan, transaksi pembayaran,
                dan aktivitas shift kasir.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-semibold text-sm">
                  Masuk sebagai Kasir
                </span>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Owner Card */}
            <button
              type="button"
              onClick={() => onSelectRole('owner')}
              className="hiroo-card p-8 text-left group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-full bg-[#382C3C] flex items-center justify-center">
                  <ChartNoAxesCombined className="w-7 h-7 text-white" />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#8B6B43]">
                  Management
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#141414]">
                Akses Owner
              </h3>

              <p className="mt-3 text-sm text-[#5A554E] leading-relaxed">
                Kelola menu, akun pengguna, laporan penjualan,
                dan operasional kedai.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-semibold text-sm">
                  Masuk sebagai Owner
                </span>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

          </div>

          <p className="text-center text-xs text-[#263330] mt-10">
            Tongkrongan Hiroo · Sistem Manajemen Kedai
          </p>

        </div>
      </main>
    </div>
  );
};
