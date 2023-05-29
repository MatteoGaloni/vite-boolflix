import { reactive } from "vue";

export const store = reactive({
    
    loading: false,    
    popularMovieUrl: "https://api.themoviedb.org/3/movie/popular?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586",
    genericMovieUrl: "https://api.themoviedb.org/3/search/movie?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
    genericTvUrl: "https://api.themoviedb.org/3/search/tv?api_key=88d5ff9ebc9aa6659450ea8f3fdc7586&query=",
        postersUrl: "https://image.tmdb.org/t/p/w342/",
    popularMovies:[],
    selectedMovies: [],
    selectedTv: [],
    userSearch: "",  
    movieFlags: {        
                en: "https://unpkg.com/language-icons/icons/en.svg",
                it: "https://unpkg.com/language-icons/icons/it.svg",
                aa: "https://unpkg.com/language-icons/icons/aa.svg",
                ab:"https://unpkg.com/language-icons/icons/ab.svg",
                ae:"https://unpkg.com/language-icons/icons/ae.svg",                
                af:"https://unpkg.com/language-icons/icons/af.svg",
                ak:"https://unpkg.com/language-icons/icons/ak.svg",
                am:"https://unpkg.com/language-icons/icons/am.svg",
                an:"https://unpkg.com/language-icons/icons/an.svg",
                ar:"https://unpkg.com/language-icons/icons/ar.svg",
                as:"https://unpkg.com/language-icons/icons/as.svg",
                av:"https://unpkg.com/language-icons/icons/av.svg",
                ay:"https://unpkg.com/language-icons/icons/ay.svg",
                az:"https://unpkg.com/language-icons/icons/az.svg",
                ba:"https://unpkg.com/language-icons/icons/ba.svg",
                be:"https://unpkg.com/language-icons/icons/be.svg",
                bg:"https://unpkg.com/language-icons/icons/bg.svg",
                bh:"https://unpkg.com/language-icons/icons/bh.svg",
                bi:"https://unpkg.com/language-icons/icons/bi.svg",
                bm:"https://unpkg.com/language-icons/icons/bm.svg",
                bn:"https://unpkg.com/language-icons/icons/bn.svg",
                bo:"https://unpkg.com/language-icons/icons/bo.svg",
                br:"https://unpkg.com/language-icons/icons/br.svg",
                bs:"https://unpkg.com/language-icons/icons/bs.svg",
                ca:"https://unpkg.com/language-icons/icons/ca.svg",
                ce:"https://unpkg.com/language-icons/icons/ce.svg",
                ch:"https://unpkg.com/language-icons/icons/ch.svg",
                co:"https://unpkg.com/language-icons/icons/co.svg",
                cr:"https://unpkg.com/language-icons/icons/cr.svg",
                cs:"https://unpkg.com/language-icons/icons/cs.svg",
                cu:"https://unpkg.com/language-icons/icons/cu.svg",
                cv:"https://unpkg.com/language-icons/icons/cv.svg",
                cy:"https://unpkg.com/language-icons/icons/cy.svg",
                da:"https://unpkg.com/language-icons/icons/da.svg",
                de:"https://unpkg.com/language-icons/icons/de.svg",
                dv:"https://unpkg.com/language-icons/icons/dv.svg",
                dz:"https://unpkg.com/language-icons/icons/dz.svg",
                ee:"https://unpkg.com/language-icons/icons/ee.svg",
                el:"https://unpkg.com/language-icons/icons/el.svg",
                en:"https://unpkg.com/language-icons/icons/en.svg",
                eo:"https://unpkg.com/language-icons/icons/eo.svg",
                es:"https://unpkg.com/language-icons/icons/es.svg",
                et:"https://unpkg.com/language-icons/icons/et.svg",
                eu:"https://unpkg.com/language-icons/icons/eu.svg",
                fa:"https://unpkg.com/language-icons/icons/fa.svg",
                ff:"https://unpkg.com/language-icons/icons/ff.svg",
                fi:"https://unpkg.com/language-icons/icons/fi.svg",
                fj:"https://unpkg.com/language-icons/icons/fj.svg",
                fo:"https://unpkg.com/language-icons/icons/fo.svg",
                fr:"https://unpkg.com/language-icons/icons/fr.svg",
                fy:"https://unpkg.com/language-icons/icons/fy.svg",
                ga:"https://unpkg.com/language-icons/icons/ga.svg",
                gd:"https://unpkg.com/language-icons/icons/gd.svg",
                gl:"https://unpkg.com/language-icons/icons/gl.svg",
                gn:"https://unpkg.com/language-icons/icons/gn.svg",
                gu:"https://unpkg.com/language-icons/icons/gu.svg",
                gv:"https://unpkg.com/language-icons/icons/gv.svg",
                ha:"https://unpkg.com/language-icons/icons/ha.svg",
                he:"https://unpkg.com/language-icons/icons/he.svg",
                hi:"https://unpkg.com/language-icons/icons/hi.svg",
                ho:"https://unpkg.com/language-icons/icons/ho.svg",
                hr:"https://unpkg.com/language-icons/icons/hr.svg",
                ht:"https://unpkg.com/language-icons/icons/ht.svg",
                hu:"https://unpkg.com/language-icons/icons/hu.svg",
                hy:"https://unpkg.com/language-icons/icons/hy.svg",
                hz:"https://unpkg.com/language-icons/icons/hz.svg",
                ia:"https://unpkg.com/language-icons/icons/ia.svg",
                id:"https://unpkg.com/language-icons/icons/id.svg",
                ie:"https://unpkg.com/language-icons/icons/ie.svg",
                ig:"https://unpkg.com/language-icons/icons/ig.svg",
                ii:"https://unpkg.com/language-icons/icons/ii.svg",
                ik:"https://unpkg.com/language-icons/icons/ik.svg",
                io:"https://unpkg.com/language-icons/icons/io.svg",
                is:"https://unpkg.com/language-icons/icons/is.svg",
                it:"https://unpkg.com/language-icons/icons/it.svg",
                iu:"https://unpkg.com/language-icons/icons/iu.svg",
                ja:"https://unpkg.com/language-icons/icons/ja.svg",
                jv:"https://unpkg.com/language-icons/icons/jv.svg",
                ka:"https://unpkg.com/language-icons/icons/ka.svg",
                kg:"https://unpkg.com/language-icons/icons/kg.svg",
                ki:"https://unpkg.com/language-icons/icons/ki.svg",
                kj:"https://unpkg.com/language-icons/icons/kj.svg",
                kk:"https://unpkg.com/language-icons/icons/kk.svg",
                kl:"https://unpkg.com/language-icons/icons/kl.svg",
                km:"https://unpkg.com/language-icons/icons/km.svg",
                kn:"https://unpkg.com/language-icons/icons/kn.svg",
                ko:"https://unpkg.com/language-icons/icons/ko.svg",
                kr:"https://unpkg.com/language-icons/icons/kr.svg",
                ks:"https://unpkg.com/language-icons/icons/ks.svg",
                ku:"https://unpkg.com/language-icons/icons/ku.svg",
                kv:"https://unpkg.com/language-icons/icons/kv.svg",
                kw:"https://unpkg.com/language-icons/icons/kw.svg",
                ky:"https://unpkg.com/language-icons/icons/ky.svg",
                la:"https://unpkg.com/language-icons/icons/la.svg",
                lb:"https://unpkg.com/language-icons/icons/lb.svg",
                lg:"https://unpkg.com/language-icons/icons/lg.svg",
                li:"https://unpkg.com/language-icons/icons/li.svg",
                ln:"https://unpkg.com/language-icons/icons/ln.svg",
                lo:"https://unpkg.com/language-icons/icons/lo.svg",
                lt:"https://unpkg.com/language-icons/icons/lt.svg",
                lu:"https://unpkg.com/language-icons/icons/lu.svg",
                lv:"https://unpkg.com/language-icons/icons/lv.svg",
                mg:"https://unpkg.com/language-icons/icons/mg.svg",
                mh:"https://unpkg.com/language-icons/icons/mh.svg",
                mi:"https://unpkg.com/language-icons/icons/mi.svg",
                mk:"https://unpkg.com/language-icons/icons/mk.svg",
                ml:"https://unpkg.com/language-icons/icons/ml.svg",
                mn:"https://unpkg.com/language-icons/icons/mn.svg",
                mr:"https://unpkg.com/language-icons/icons/mr.svg",
                ms:"https://unpkg.com/language-icons/icons/ms.svg",
                mt:"https://unpkg.com/language-icons/icons/mt.svg",
                my:"https://unpkg.com/language-icons/icons/my.svg",
                na:"https://unpkg.com/language-icons/icons/na.svg",
                nb:"https://unpkg.com/language-icons/icons/nb.svg",
                nd:"https://unpkg.com/language-icons/icons/nd.svg",
                ne:"https://unpkg.com/language-icons/icons/ne.svg",
                ng:"https://unpkg.com/language-icons/icons/ng.svg",
                nl:"https://unpkg.com/language-icons/icons/nl.svg",
                nn:"https://unpkg.com/language-icons/icons/nn.svg",
                no:"https://unpkg.com/language-icons/icons/no.svg",
                nr:"https://unpkg.com/language-icons/icons/nr.svg",
                nv:"https://unpkg.com/language-icons/icons/nv.svg",
                ny:"https://unpkg.com/language-icons/icons/ny.svg",
                oc:"https://unpkg.com/language-icons/icons/oc.svg",
                oj:"https://unpkg.com/language-icons/icons/oj.svg",
                om:"https://unpkg.com/language-icons/icons/om.svg",
                or:"https://unpkg.com/language-icons/icons/or.svg",
                os:"https://unpkg.com/language-icons/icons/os.svg",
                pa:"https://unpkg.com/language-icons/icons/pa.svg",
                pi:"https://unpkg.com/language-icons/icons/pi.svg",
                pl:"https://unpkg.com/language-icons/icons/pl.svg",
                ps:"https://unpkg.com/language-icons/icons/ps.svg",
                pt:"https://unpkg.com/language-icons/icons/pt.svg",
                qu:"https://unpkg.com/language-icons/icons/qu.svg",
                rm:"https://unpkg.com/language-icons/icons/rm.svg",
                rn:"https://unpkg.com/language-icons/icons/rn.svg",
                ro:"https://unpkg.com/language-icons/icons/ro.svg",
                ru:"https://unpkg.com/language-icons/icons/ru.svg",
                rw:"https://unpkg.com/language-icons/icons/rw.svg",
                sa:"https://unpkg.com/language-icons/icons/sa.svg",
                sc:"https://unpkg.com/language-icons/icons/sc.svg",
                sd:"https://unpkg.com/language-icons/icons/sd.svg",
                se:"https://unpkg.com/language-icons/icons/se.svg",
                sg:"https://unpkg.com/language-icons/icons/sg.svg",
                si:"https://unpkg.com/language-icons/icons/si.svg",
                sk:"https://unpkg.com/language-icons/icons/sk.svg",
                sl:"https://unpkg.com/language-icons/icons/sl.svg",
                sm:"https://unpkg.com/language-icons/icons/sm.svg",
                sn:"https://unpkg.com/language-icons/icons/sn.svg",
                so:"https://unpkg.com/language-icons/icons/so.svg",
                sq:"https://unpkg.com/language-icons/icons/sq.svg",
                sr:"https://unpkg.com/language-icons/icons/sr.svg",
                ss:"https://unpkg.com/language-icons/icons/ss.svg",
                st:"https://unpkg.com/language-icons/icons/st.svg",
                su:"https://unpkg.com/language-icons/icons/su.svg",
                sv:"https://unpkg.com/language-icons/icons/sv.svg",
                sw:"https://unpkg.com/language-icons/icons/sw.svg",
                ta:"https://unpkg.com/language-icons/icons/ta.svg",
                te:"https://unpkg.com/language-icons/icons/te.svg",
                tg:"https://unpkg.com/language-icons/icons/tg.svg",
                th:"https://unpkg.com/language-icons/icons/th.svg",
                ti:"https://unpkg.com/language-icons/icons/ti.svg",
                tk:"https://unpkg.com/language-icons/icons/tk.svg",
                tl:"https://unpkg.com/language-icons/icons/tl.svg",
                tn:"https://unpkg.com/language-icons/icons/tn.svg",
                to:"https://unpkg.com/language-icons/icons/to.svg",
                tr:"https://unpkg.com/language-icons/icons/tr.svg",
                ts:"https://unpkg.com/language-icons/icons/ts.svg",
                tt:"https://unpkg.com/language-icons/icons/tt.svg",
                tw:"https://unpkg.com/language-icons/icons/tw.svg",
                ty:"https://unpkg.com/language-icons/icons/ty.svg",
                ug:"https://unpkg.com/language-icons/icons/ug.svg",
                uk:"https://unpkg.com/language-icons/icons/uk.svg",
                ur:"https://unpkg.com/language-icons/icons/ur.svg",
                uz:"https://unpkg.com/language-icons/icons/uz.svg",
                ve:"https://unpkg.com/language-icons/icons/ve.svg",
                vi:"https://unpkg.com/language-icons/icons/vi.svg",
                vo:"https://unpkg.com/language-icons/icons/vo.svg",
                wa:"https://unpkg.com/language-icons/icons/wa.svg",
                wo:"https://unpkg.com/language-icons/icons/wo.svg",
                xh:"https://unpkg.com/language-icons/icons/xh.svg",
                yi:"https://unpkg.com/language-icons/icons/yi.svg",
                yo:"https://unpkg.com/language-icons/icons/yo.svg",
                za:"https://unpkg.com/language-icons/icons/za.svg",
                zh:"https://unpkg.com/language-icons/icons/zh.svg",
                zu:"https://unpkg.com/language-icons/icons/zu.svg",
        }    
})
