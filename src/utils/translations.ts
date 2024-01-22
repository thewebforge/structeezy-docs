import { useTranslations } from "@nm/@astrojs/starlight/utils/translations";
import { slugToLocale } from "~/utils";
import type { Dictionary } from "~/content/config";

export const getTranslations = (slug: string = "en"): Dictionary => {
    const locale = slugToLocale(slug);
    const labels = useTranslations(locale).all();
    return labels;
};