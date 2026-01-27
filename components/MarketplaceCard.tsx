import React from "react";

export interface MarketplaceListing {
  id: string;
  name: string;
  species: string;
  quantityKg: number;
  grade: "A" | "B" | "C";
  pricePerKg: number;
  origin: string;
}

interface MarketplaceCardProps {
  listing: MarketplaceListing;
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ listing }) => {
  return (
    <article className="card-surface flex flex-col justify-between p-4 text-xs md:p-5">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            {listing.name}
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            {listing.species} • {listing.origin}
          </p>
        </div>
        <span className="badge-soft bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40 text-[11px]">
          Grade {listing.grade}
        </span>
      </header>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
        <div>
          <dt className="text-slate-500">Available volume</dt>
          <dd className="mt-0.5 font-semibold">
            {listing.quantityKg.toLocaleString()} kg
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Price / kg</dt>
          <dd className="mt-0.5 font-semibold text-bluevora-light">
            ${listing.pricePerKg.toFixed(2)}
          </dd>
        </div>
      </dl>

      <footer className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500">
          Transparent, direct-to-buyer pricing via Bluevora marketplace.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-bluevora/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft hover:bg-bluevora transition-colors"
        >
          Connect Buyer
        </button>
      </footer>
    </article>
  );
};

