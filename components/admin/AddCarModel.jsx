"use client";
import { createcar } from "@/app/(home)/action/actions";
export default function AddCarModal({
  brands,
  categories,
  initialData,
  onClose,
  onSuccess,
}) {
  const isEditMode = !!initialData;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
        <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 text-white relative shadow-2xl custom-scrollbar">
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl"
          >
            ✕
          </button>

          <h1 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter">
            {isEditMode ? "Update" : "Save"}{" "}
            <span className="text-red-600">Inventory</span>
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            action={async (formData) => {
              await createcar(formData);
              if (onSuccess) onSuccess();
              onClose();
            }}
          >
            {initialData?._id && (
              <input
                type="hidden"
                name="carId"
                value={initialData._id.toString()}
              />
            )}

            {/* Basic Info */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Car Name
              </label>
              <input
                name="name"
                defaultValue={initialData?.name || ""}
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Price (BDT)
              </label>
              <input
                defaultValue={initialData?.price || ""}
                name="price"
                type="number"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Tag
              </label>
              <input
                defaultValue={initialData?.tag || ""}
                name="tag"
                placeholder="e.g. New Arrival"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            {/* Technical Specs */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Engine
              </label>
              <input
                defaultValue={initialData?.engine || ""}
                name="engine"
                placeholder="1500cc VVT-i Hybrid"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                CC
              </label>
              <input
                defaultValue={initialData?.cc || ""}
                name="cc"
                placeholder="1500cc"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Color
              </label>
              <input
                defaultValue={initialData?.color || ""}
                name="color"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Mileage
              </label>
              <input
                defaultValue={initialData?.mileage || ""}
                name="mileage"
                placeholder="22,000 km"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Fuel Type
              </label>
              <input
                defaultValue={initialData?.fuel || ""}
                name="fuel"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Transmission
              </label>
              <input
                defaultValue={initialData?.transmission || ""}
                name="transmission"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Model Year
              </label>
              <input
                defaultValue={initialData?.modelYear || ""}
                name="modelYear"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Chassis No
              </label>
              <input
                defaultValue={initialData?.chassisNo || ""}
                name="chassisNo"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Model Code
              </label>
              <input
                defaultValue={initialData?.modelCode || ""}
                name="modelCode"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Package
              </label>
              <input
                defaultValue={initialData?.package || ""}
                name="package"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                AU Grade
              </label>
              <input
                defaultValue={initialData?.au_grade || ""}
                name="au_grade"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Seats
              </label>
              <input
                defaultValue={initialData?.seats || ""}
                name="seats"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Safety System
              </label>
              <input
                defaultValue={initialData?.s_system || ""}
                name="s_system"
                placeholder="Safety Sense"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            {/* Relations */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Select Brand
              </label>
              <select
                defaultValue={initialData?.brand || ""}
                name="brand"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              >
                {brands.map((b) => (
                  <option key={b._id} value={b._id} className="bg-black">
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Select Category
              </label>
              <select
                defaultValue={initialData?.category || ""}
                name="category"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              >
                {categories.map((c) => (
                  <option key={c._id} value={c._id} className="bg-black">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Media & Desc */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Main Image URL
              </label>
              <input
                // defaultValue={initialData?.mainImage || ""}
                name="mainImage"
                type="file"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
                required
              />
            </div>

            <div className="md:col-span-3 flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Upload Gallery Images
              </label>
              <input
                name="gallery"
                type="file"
                multiple
                // defaultValue={initialData?.gallery || ""}
                accept="image/*"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              />
            </div>

            <div className="md:col-span-3 flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-gray-500">
                Description
              </label>
              <textarea
                defaultValue={initialData?.description || ""}
                name="description"
                rows="3"
                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-red-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="md:col-span-3 bg-red-600 text-white p-4 rounded-xl font-black uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95 mt-4"
            >
              {isEditMode ? "Update Inventory" : "Save Inventory"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
