import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const KATALYST_CONTACT_FORM_URL = "https://api.leadconnectorhq.com/widget/form/lg7gEff35lLwWgBb1JkS";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-24 bg-muted/40">
    <div className="container">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-brand-deep mt-3 mb-4 leading-[1.12]">
            Send us a quick message.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Have a question about Pods & Tutors in Connecticut? Share your name,
            email, and message. Your note goes straight into Ayo&apos;s Katalyst
            contact system.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-card border border-border/60">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-brand-deep">Simple contact capture</p>
                <p className="text-sm text-muted-foreground">Name, email, and message only.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-[2rem] bg-white p-3 md:p-4 shadow-card border border-border/70 overflow-hidden"
        >
          <iframe
            src={KATALYST_CONTACT_FORM_URL}
            className="w-full min-h-[765px] border-0 rounded-2xl"
            id="inline-lg7gEff35lLwWgBb1JkS"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Pods & Tutors — Contact Form"
            data-height="765"
            data-layout-iframe-id="inline-lg7gEff35lLwWgBb1JkS"
            data-form-id="lg7gEff35lLwWgBb1JkS"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Pods & Tutors — Contact Form"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
