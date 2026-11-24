
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User as UserIcon, ArrowLeft } from 'lucide-react';
import { usePos } from '../store/posStore';

interface LoginScreenProps {
  role: 'cashier' | 'owner';
  onBack: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  role,
  onBack,
}) => {
  const { login } = usePos();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isCashier = role === 'cashier';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const res = await login(username, password);

    if (!res.success) {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#A3431B]">

      {/* Header */}
      <header className="px-4 pt-8 pb-7 text-center text-[#141414]">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-[#8B3614]/80 px-4 py-1.5 text-xs font-medium text-[#FAF8F4] mb-5">
          <span>Sistem Informasi Operasional</span>
        </div>

        <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-[#141414]">
          tongkrongan Hiroo
        </h1>

        <p className="mt-3 font-mono-tabular text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#141414]/85 font-semibold">
          Kopi, Teh & Camilan Hangat
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#7F9995] border-y-[1.5px] border-[#141414] px-4 py-8 sm:py-12">

        <div className="mx-auto max-w-md">

          {/* Title */}
          <div className="text-center mb-8">
            <p className="font-brand text-2xl sm:text-3xl text-[#141414]">
              tongkrongan hiroo
            </p>

            <p className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-[#141414]/80 mt-1">
              {isCashier ? 'Akses Pengguna Kasir' : 'Akses Pengelola Toko'}
            </p>
          </div>

          {/* Login Form */}
          <section className="hiroo-card p-6 sm:p-7">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#141414]">
                Login {isCashier ? 'Kasir' : 'Owner'}
              </h2>

              <p className="mt-1 text-sm text-[#5A554E]">
                {isCashier
                  ? 'Silakan masuk menggunakan akun kasir Anda untuk mengelola pesanan dan transaksi.'
                  : 'Silakan masuk menggunakan akun owner Anda untuk mengelola operasional kedai.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Username */}
              <div>
                <label
                  htmlFor="login-username"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141414] mb-1.5"
                >
                  Username
                </label>

                <div className="relative">
                  <UserIcon className="w-4 h-4 text-[#5A554E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                  <input
                    id="login-username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Masukkan username"
                    required
                    className="w-full rounded-xl border-[1.5px] border-[#141414] bg-white pl-10 pr-4 py-2.5 text-sm text-[#141414] placeholder:text-[#9A938A] focus:outline-none focus:ring-2 focus:ring-[#141414]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141414] mb-1.5"
                >
                  Kata Sandi
                </label>

                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5A554E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    required
                    className="w-full rounded-xl border-[1.5px] border-[#141414] bg-white pl-10 pr-11 py-2.5 text-sm text-[#141414] placeholder:text-[#9A938A] focus:outline-none focus:ring-2 focus:ring-[#141414]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Sembunyikan sandi' : 'Lihat sandi'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#5A554E] hover:text-[#141414]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div
                  role="alert"
                  className="rounded-xl border border-[#C93B2B] bg-[#FDECEC] px-3.5 py-2.5 text-xs font-medium text-[#991B1B]"
                >
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full hiroo-btn-dark rounded-full py-3 px-5 text-sm font-bold tracking-wide cursor-pointer"
              >
                Masuk Sekarang
              </button>

            </form>

            {/* Back Button */}
            <div className="mt-6 pt-4 border-t border-[#141414]/15">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A554E] hover:text-[#141414] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Pilihan Akses
              </button>
            </div>

          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#5F9227] text-[#141414]">
        <div className="mx-auto max-w-6xl px-4 py-7 text-center">
          <p className="font-mono-tabular font-bold uppercase tracking-wider text-xs">
            Kafe & Kedai Tongkrongan Hiroo
          </p>

          <p className="mt-2 text-xs text-[#141414]/85">
            Pencatatan Pesanan, Transaksi & Rekap Kas Harian
          </p>

          <p className="font-brand text-2xl mt-3">
            tongkrongan hiroo
          </p>
        </div>

        <div className="bg-[#141414] text-[#FAF8F4] py-2 overflow-hidden">
          <div className="animate-marquee font-mono-tabular text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
            <span className="mx-6">TONGKRONGAN HIROO POS</span>
            <span>•</span>
            <span className="mx-6">ES KOPI SUSU GULA AREN</span>
            <span>•</span>
            <span className="mx-6">PENCATATAN SHIFT & TUTUP KAS OTOMATIS</span>
            <span>•</span>
            <span className="mx-6">TUNAI & QRIS MANUAL TERDATA RAPI</span>
            <span>•</span>
            <span className="mx-6">TONGKRONGAN HIROO POS</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
